import { createPortal } from "react-dom"
import { Container, Title } from "../styled"

const Modal = () => {
    return createPortal(
        <Container>  
            <Title> Modal </Title>
            <p> Hello Bloggers </p>
            <button> Sign up </button>
        </Container>,
        document.getElementById('modal')
    )
}

export default Modal;