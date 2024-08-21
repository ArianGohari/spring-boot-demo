import PaperUpload from "Frontend/components/PaperUpload";

export default function MainView() {

    const outerDivStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        overflow: "hidden",
    }


    return (
        <div style={outerDivStyle}>
            <PaperUpload/>
        </div>
    );
}