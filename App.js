const App = {
    button: document.querySelector("button"),
    content: "",
    img: document.querySelector(".image"),
    start(){
        this.button.addEventListener('click', () => {
            this.content = document.querySelector("input").value
            if(this.content == ""){
                alert("Undefined Value.")
                return
            }
            this.img.src = "assets/loading.svg"

            this.generate()
        })
    },
    generate(){
        this.img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.content}`
    }
}

export default App