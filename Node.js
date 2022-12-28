export const Node = (value) => {
    return{
        value : value || null,
        left:null,
        right:null,
        addLeft(node){
            this.left=node
        },
        addRight(node){
            this.right = node
        }
    }
}