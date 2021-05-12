$(document).ready(()=>{
    let total_vote=0;
    let votedatabase=[
        {
            id:1,
            name:'virat',
            vote:0
        },
        {
            id:2,
            name:'rohit',
            vote:0
        },
        {
            id:3,
            name:'babar',
            vote:0
        },
        {
            id:4,
            name:'ross',
            vote:0
        },
        {
            id:5,
            name:'finch',
            vote:0
        },
        {
            id:6,
            name:'bairstow',
            vote:0
        },
        {
            id:7,
            name:'fakhar',
            vote:0
        },
        {
            id:8,
            name:'hope',
            vote:0
        },
        {
            id:9,
            name:'faf',
            vote:0
        },
        {
            id:10,
            name:'warner',
            vote:0
        }
];

$("button").click(function(){

    let player=$(this).val();
   // console.log(player);
    player=parseInt(player);
    votedatabase.map((data)=>{
        console.log(data);
        if(player===data.id){
            data.vote=data.vote+1;
        }
        console.log(data.vote);
        total_vote++;
    });
    
});


// console.log(votedatabase);
});