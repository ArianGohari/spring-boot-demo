package de.gohari.chat_with_paper.view;

import com.vaadin.componentfactory.pdfviewer.PdfViewer;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.PreserveOnRefresh;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import de.gohari.chat_with_paper.service.ChatService;
import de.gohari.chat_with_paper.service.PaperService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@Route("/paper")
@RequiredArgsConstructor
@PreserveOnRefresh
public class PaperView extends HorizontalLayout implements HasUrlParameter<String> {

  private final Logger logger = LoggerFactory.getLogger(PaperView.class);

  private final ChatService chatService;

  private final PaperService paperService;

  private String paperId;

  private final PdfViewer pdfViewer = new PdfViewer();

  private final ChatView chatView = new ChatView();

  /**
   * Initialize the view
   */
  @PostConstruct
  public void init() {
    logger.info("init");

    // Set the pdf viewer to full height and close the thumbnails view
    pdfViewer.setHeightFull();
    pdfViewer.closeThumbnailsView();

    // Load the paper into the pdf viewer
    loadPaper();

    // Set the chat view to full height and overflow hidden
    getStyle().set("overflow", "hidden");
    setHeightFull();

    // Add the pdf viewer and chat view to the layout
    add(pdfViewer);
    add(chatView);
  }

  /**
   * Set the url parameter
   *
   * @param event     The before event
   * @param parameter The parameter
   */
  @Override
  public void setParameter(BeforeEvent event, String parameter) {
    logger.info("setParameter: {}", parameter);

    // Set the paper id as url parameter
    paperId = parameter;

    // Load the paper into the pdf viewer
    loadPaper();
  }

  /**
   * Load the paper stream resource from paper service into the pdf viewer
   */
  private void loadPaper() {

    // Create a stream resource from the paper service
    var paperResource = new StreamResource("example.pdf", () -> {
      try {
        return paperService.load(paperId);
      }

      // Throw a runtime exception if an IOException occurs
      catch (IOException e) {
        throw new RuntimeException(e);
      }
    });

    // Set the stream resource as the source of the pdf viewer
    pdfViewer.setSrc(paperResource);

    if (paperId != null) {
      // Load the chat messages for the paper
      var messages = chatService.loadMessagesForPaper(paperId);
      chatView.loadMessages(messages);
    }
  }
}
