import {ProgressBar, Upload} from "@vaadin/react-components";
import "@vaadin/icon";
import {useSignal} from "@vaadin/hilla-react-signals";
import {useNavigate} from 'react-router-dom';
import {useEffect, useRef} from "react";

export default function PaperUpload() {

    const loading = useSignal<boolean>(false);
    const error = useSignal<boolean>(false);
    const navigate = useNavigate();
    const uploadRef = useRef<any>(null);

    useEffect(() => {
        if (uploadRef.current) {
            uploadRef.current.i18n.addFiles.one = 'Upload PDF';
            uploadRef.current.i18n.dropFiles.one = 'Or Drop here';
            uploadRef.current.i18n.error.incorrectFileType =
                'The provided file does not have the correct format (PDF document).';
            uploadRef.current.i18n = {...uploadRef.current.i18n};
        }
    }, []);

    const style = {
        border: '1px dashed var(--lumo-contrast-30pct)',
        borderRadius: 'var(--lumo-border-radius-s)',
        boxShadow: 'var(--lumo-box-shadow-s)',
        width: '21rem',
        height: '25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: "1rem",
    }


    if (loading.value) {
        return (
            <div style={style}>
                <ProgressBar indeterminate style={{width: "50%"}}/>
            </div>
        );
    }

    else if(error.value) {
        return (
            <div style={style}>
                <p>Something went wrong :/</p>
            </div>
        );
    }

    else {
        return (
            <Upload
                ref={uploadRef}
                accept='application/pdf,.pdf'
                maxFiles={1}
                target='/api/papers'
                className='w-full'
                onUploadSuccess={(e) => {
                    const response = JSON.parse(e.detail.xhr.response);
                    navigate(`paper/${response.id}`);
                    window.location.reload();
                }}
            />
        );
    }
}