export const Name = ({ id, name, sex, onClickEvent }) => {
    return (
        <li className={sex} key={id}>
            <button onClick={() => onClickEvent(id)} >{name}</button>
        </li>
    )
}