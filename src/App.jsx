import './style.css';
import Container from './Container/Container';
import Header from './Header/Header.jsx';
import ContainerModal from './ContainerModal/ContainerModal';

const App = () => {
    
    return (
        <>
            <Container>
                <Header />
                <ContainerModal TextModal={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod harum nobis eos architecto, saepe aspernatur! Magnam veniam eaque quos animi unde cum quidem perspiciatis, id deserunt neque iste error nam."} TextBtn={"What is front end mentor, and how it will help me?"}/>
                <ContainerModal TextModal={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod harum nobis eos architecto, saepe aspernatur! Magnam veniam eaque quos animi unde cum quidem perspiciatis, id deserunt neque iste error nam."} TextBtn={"What is front end mentor, and how it will help me?"}/>
                <ContainerModal TextModal={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod harum nobis eos architecto, saepe aspernatur! Magnam veniam eaque quos animi unde cum quidem perspiciatis, id deserunt neque iste error nam."} TextBtn={"What is front end mentor, and how it will help me?"}/>
                <ContainerModal TextModal={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod harum nobis eos architecto, saepe aspernatur! Magnam veniam eaque quos animi unde cum quidem perspiciatis, id deserunt neque iste error nam."} TextBtn={"What is front end mentor, and how it will help me?"}/>
            </Container>    
        </>
    )
}

export default App;