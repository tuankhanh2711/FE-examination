function handle(a) {
  a.sort((x, y) => x - y);
    for(let i=0; i< a.length; i++){
        if(a[i]===a[i+1]){
            a.splice(i+1,1);
            i--;
        }
    }
  console.log(a);
}
a = [1, 2, 2, 3, 4, 6, 7, 8, 6];
handle(a);
