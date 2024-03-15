import styles from "./Randomize.module.css"

export default function Randomize (props) {
    const { link } = styles
    const RandomNumberGenerated = Math.floor(Math.random() * 826 + 1)
    return(
        <div>
            <button className={link} onClick={(() => {props.onSearch(RandomNumberGenerated)})}>
                Random Character Generator
            </button>
        </div>
    )
}

