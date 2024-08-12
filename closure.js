function add(){
    let count =0;
    function num(){
        count++;
        console.log(count);
    }
    return num;
}
const closure = add();
closure();
closure();
