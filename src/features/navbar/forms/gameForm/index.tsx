import { useParams } from 'react-router';

// same form to see current game data, edit or delete or add newly created game
const GameForm = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            <h1>Game Form</h1>
        </>
    )
}
export default GameForm;