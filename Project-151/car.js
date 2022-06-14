AFRAME.registerComponent("car",{
    schema:{
        modelRef:{type:"string",default:"./car-model/scene.gltf"},
        clickCounter:{type:"number",default:0}
    },

    init: function(){
        
        this.el.setAttribute("gltf-model",this.data.modelRef)
        const position = { x: 0, y: 2, z: 0 };
        const rotation = { x: 0, y: -100, z: 0 };
        const scale = { x: 1, y: 1, z: 1 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale",scale)
    },

    update: function(){
        window.addEventListener("click",(e)=>{
            this.data.clickCounter=this.data.clickCounter+1
            if(this.data.clickCounter === 1){
                const rotation={x:0 , y:50 , z:0}
                this.el.setAttribute("rotation",rotation)
            }else if(this.data.clickCounter === 2){
                const rotation={x:0 , y:100 , z:0}
                this.el.setAttribute("rotation",rotation)
            }else if(this.data.clickCounter === 3){
                const rotation={x:0 , y:50 , z:0}
                this.el.setAttribute("rotation",rotation)
                this.data.clickCounter = 0
            }
        })
    }
})