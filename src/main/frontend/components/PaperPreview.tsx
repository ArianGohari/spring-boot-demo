import Paper from "Frontend/generated/de/gohari/chat_with_paper/model/Paper";
import {useNavigate} from "react-router-dom";

export default function PaperPreview(props: {paper: Paper}) {
    const navigate = useNavigate();

    const style = {
        border: '1px solid var(--lumo-contrast-30pct)',
        borderRadius: 'var(--lumo-border-radius-s)',
        boxShadow: 'var(--lumo-box-shadow-s)',
        width: '21rem',
        height: '25rem',
        background: `url("api/papers/${props.paper.id}/thumbnail")`,
        cursor: 'pointer',
    }

    return (
        <div style={style} onClick={() => {
            navigate(`paper/${props.paper.id}`)
        }}>

        </div>
    );
}