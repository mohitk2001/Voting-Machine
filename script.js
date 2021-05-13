$(document).ready(()=>{
    let total_vote=0;
    let votedatabase=[
        {
            id:1,
            name:'virat',
            vote:0,
            vote_p:0
        },
        {
            id:2,
            name:'rohit',
            vote:0,
            vote_p:0
        },
        {
            id:3,
            name:'babar',
            vote:0,
            vote_p:0
        },
        {
            id:4,
            name:'ross',
            vote:0,
            vote_p:0
        },
        {
            id:5,
            name:'finch',
            vote:0,
            vote_p:0
        },
        {
            id:6,
            name:'bairstow',
            vote:0,
            vote_p:0
        },
        {
            id:7,
            name:'fakhar',
            vote:0,
            vote_p:0
        },
        {
            id:8,
            name:'hope',
            vote:0,
            vote_p:0
        },
        {
            id:9,
            name:'faf',
            vote:0,
            vote_p:0
        },
        {
            id:10,
            name:'warner',
            vote:0,
            vote_p:0
        }
];
let precent;
$("button").click(function(){
    total_vote++;
    
    let player=$(this).val();
   
    player=parseInt(player);
    votedatabase.map((data)=>{
        
        if(player===data.id){
            data.vote=data.vote+1;
        }
        
        
    });
    
   console.log(votedatabase[player-1].name);
   precent=(votedatabase[player-1].vote/total_vote)*100;
  // precent=precent.toFixed(2);
   console.log(precent);
   console.log(total_vote);
    $(this).next().children().css({"width": `${precent}%`});
});



});