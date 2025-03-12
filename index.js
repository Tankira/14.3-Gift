const acceptBtn = document.getElementsByClassName("accept")[0];
const declineBtn = document.getElementsByClassName("decline")[0];
const questionTxt = document.getElementsByClassName("question")[0];
const image = document.getElementsByClassName("image")[0];
const dialogContainer = document.getElementsByClassName("dialogContainer")[0];
const envelopeContainer = document.getElementsByClassName("envelope")[0];
const envelopeOutsideImage = document.getElementsByClassName("envelopeOutsideImage")[0];
const envelopePaper = document.getElementsByClassName("envelopePaper")[0];

let count = 0;

acceptBtn.addEventListener("click", () => {
    count++
    if (count === 1) 
    {
        if (image.src === "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0NjBpd3R2aHdteGVzMWVjaHhlbzZrN2pkbDB0cmc3cGx1bHJ5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S5ndDLMZX8qVO6Kd23/giphy.gif")
        {
            image.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWd6amptNWRiYXNpaG14MTd5YXZxaGxndWJuZ2tpbmNjaTl4d3h4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ii7npo9yk9yupSZ0sH/giphy.gif"
        }
        questionTxt.innerHTML = "Tường đồng ý làm người yêu tui nhé?"
    }
    if (count === 2)
    {
        dialogContainer.style.opacity = 0
        setInterval(() => {
            dialogContainer.remove()
            envelopeContainer.style.display = "flex"
        }, 500)
        setInterval(() => envelopeContainer.style.opacity = 1, 600)
    }
})

declineBtn.addEventListener("click", () => {
    if (count === 0) {
        questionTxt.innerHTML = "Đồng ý đi mà 😖🥺"
        image.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0NjBpd3R2aHdteGVzMWVjaHhlbzZrN2pkbDB0cmc3cGx1bHJ5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S5ndDLMZX8qVO6Kd23/giphy.gif"
    }
})

declineBtn.addEventListener("mouseover", () => {
    if (count === 1)
    {
        declineBtn.innerHTML = "Không thể từ chối ><"
        declineBtn.style.position = "absolute"
        declineBtn.style.top = `${Math.random() * (128+64)+64}px`
        declineBtn.style.right = `${Math.random() * (128+64)+64}px`
    }
})

envelopeOutsideImage.addEventListener("click", () => {
    envelopeContainer.style.background = "#0000000f" 
    envelopeContainer.style.backdropFilter = "blur(1rem) brightness(0.5)"
    envelopePaper.style.display = "block"
    setInterval(() => envelopePaper.style.opacity = 1, 500)
})