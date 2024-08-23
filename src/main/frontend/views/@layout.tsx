import "@vaadin/react-components/css/Lumo.css";
import "@vaadin/vaadin-lumo-styles/all-imports";
import "@vaadin/icons";

import { Outlet, useNavigate } from 'react-router-dom';
import {
  AppLayout,
  ConfirmDialog,
  Icon,
  Tab,
  Tabs,
  TabsSelectedChangedEvent
} from "@vaadin/react-components";
import { useSignal } from "@vaadin/hilla-react-signals";
import Paper from "Frontend/generated/de/gohari/chat_with_paper/model/Paper";
import React, { useEffect } from "react";
import { PaperService } from "Frontend/generated/endpoints";

export default function MainLayout() {

  // Initialie state
  const papers = useSignal<Paper[]>([]);
  const paperIds = useSignal<string[]>([]);
  const selectedPaperForDeletion = useSignal<Paper | undefined>(undefined);
  const selectedIndex = useSignal<number | undefined>(undefined);
  const dialogOpened = useSignal(false);
  const navigate = useNavigate();

  useEffect(() => {

    // Load paper preview then update state
    PaperService.loadPreview().then((preview) => {
      papers.value = preview
      paperIds.value = preview.map(paper => paper.id!);

      // Get paper id from url
      const url = window.location.pathname;

      // If url is / -> set selected index to 0
      if (url === "/") {
        selectedIndex.value = 0;
      }

      // Else get paper id from url
      else {
        const paperId = url.split("/")[2];

        // Set selected index to index of paper with id paperId
        selectedIndex.value = paperIds.value.indexOf(paperId) + 1;
      }
    });
  }, []);


  // Handle tab selection
  const onSelectedChanged = (e: TabsSelectedChangedEvent) => {
    selectedIndex.value = e.detail.value;
  };

  // Initialize app layout styles
  const appLayoutStyle = {
    overflow: "hidden",
  }

  // Initialize h1 styles
  const h1Style = {
    fontSize: 'var(--lumo-font-size-l)',
    margin: 'var(--lumo-space-m)',
  };

  // Initialize icon styles
  const iconStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    marginInlineEnd: 'var(--lumo-space-m)',
    marginInlineStart: 'var(--lumo-space-xs)',
    padding: 'var(--lumo-space-xs)',
  };


  // Format paper name, if name is longer than 16 characters, show first 16 characters
  function formatPaperName(paper: Paper) {
    if (paper.name != null && paper.name?.length > 16) {
      return paper.name?.substring(0, 16) + '...';
    }

    return paper.name;
  }

  // Select paper for deletion and open dialog
  function selectPaperForDeletion(paper: Paper) {
    selectedPaperForDeletion.value = paper;
    dialogOpened.value = true;
  }// Not implemented

  // Unselect paper for deletion and close dialog
  function unselectPaperForDeletion() {
    selectedPaperForDeletion.value = undefined;
    dialogOpened.value = false;
  }// Not implemented

  // Delete selected paper for deletion if not null, call PaperService and update state
  function deletePaper() {
    if (selectedPaperForDeletion.value != null) {
      PaperService.delete(selectedPaperForDeletion.value.id!).then(() => {
        const index = papers.value.indexOf(selectedPaperForDeletion.value!);
        papers.value.splice(index, 1);
        paperIds.value.splice(index, 1);
        unselectPaperForDeletion();

        console.log("Paper deleted successfully");
        navigate("/");
        console.log("Navigated to /");
      });
    }
  }

  // Callend when right click on tab, prevent default and select paper for deletion
  function onContextMenu(e: React.MouseEvent, paper: Paper) {
    e.preventDefault();
    selectPaperForDeletion(paper);
  }

  return (
    <AppLayout style={appLayoutStyle}>
      <h1 slot="navbar" style={h1Style}>
        Spring Boot - React - MongoDB - Demo App
      </h1>
      <Tabs slot="drawer" orientation="vertical" selected={selectedIndex.value}
        onSelectedChanged={onSelectedChanged}>
        <Tab tabIndex={0}>
          <a href="/">
            <Icon icon="vaadin:cloud-upload-o" style={iconStyle} />
            <span>Upload paper</span>
          </a>
        </Tab>
        {papers.value.map(paper => {
          return (
            <Tab key={paper.id} onContextMenu={(e) => onContextMenu(e, paper)}>
              <a href={`/paper/${paper.id}`}>
                <Icon icon="vaadin:file-text-o" style={iconStyle} />
                <span>{formatPaperName(paper)}</span>
              </a>
            </Tab>
          );
        })}
      </Tabs>
      <ConfirmDialog
        header="Delete paper"
        cancelButtonVisible
        confirmText="Delete"
        opened={dialogOpened.value}
        onConfirm={deletePaper}
        onCancel={unselectPaperForDeletion}
      >
        Do you want to delete {selectedPaperForDeletion.value?.name ?? "this paper"}?
      </ConfirmDialog>
      <Outlet />
    </AppLayout>
  )
}
