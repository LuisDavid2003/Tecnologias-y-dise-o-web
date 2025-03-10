const ctx= document.getElementById("myChart").getContext('2d');
 
new Chart(ctx,{
    type:'bar',
    data:{
        labels:['Enero','Febrero','Marzo','Abril'],
        datasets:[{
            label:'Ventas',
            data:[120,130,140,150],
            backgroundcolor:'blue'
        }]
    }
});