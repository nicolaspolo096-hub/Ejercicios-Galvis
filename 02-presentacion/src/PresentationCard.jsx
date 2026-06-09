import imagenFoto from './assets/foto.jpg'

function PresentationCard() {
    let name = 'Nicolas'
    return(
        <div className='presentation-card'>
            <img src={imagenFoto} alt='Avatar' className='avatar' />
        <h1>Hola, soy {name} y estoy aprendiendo react</h1>
        </div>
    );
}

export default PresentationCard