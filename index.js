var pronom = ['nosotrossomos','ustedesson','nuestrosamigosson', 'mis'];
var adj = ['grandes', 'enormes', 'mini' ];
var sustan = ['dibujantes','elefantes', 'cocineros'];
var exten = [".com", ".cl", ".es", ".pe", ".net"];

for (i=0; i<pronom.length; i++){
    for (j=0; j<adj.length; j++){
        for (k=0; k<sustan.length; k++){
            for (l=0; l<exten.length; l++){
                console.log(pronom[i]+adj[j]+sustan[k]+exten[l])
            }
        }
    }
}
