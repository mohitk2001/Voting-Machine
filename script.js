$(document).ready(() => {
    let total_vote = 0;
    let votedatabase = [
        {
            id: 1,
            name: 'virat',
            vote: 0,
            vote_p: 0
        },
        {
            id: 2,
            name: 'rohit',
            vote: 0,
            vote_p: 0
        },
        {
            id: 3,
            name: 'babar',
            vote: 0,
            vote_p: 0
        },
        {
            id: 4,
            name: 'ross',
            vote: 0,
            vote_p: 0
        },
        {
            id: 5,
            name: 'finch',
            vote: 0,
            vote_p: 0
        },
        {
            id: 6,
            name: 'bairstow',
            vote: 0,
            vote_p: 0
        },
        {
            id: 7,
            name: 'fakhar',
            vote: 0,
            vote_p: 0
        },
        {
            id: 8,
            name: 'hope',
            vote: 0,
            vote_p: 0
        },
        {
            id: 9,
            name: 'faf',
            vote: 0,
            vote_p: 0
        },
        {
            id: 10,
            name: 'warner',
            vote: 0,
            vote_p: 0
        }
    ];


    let Prog = [
        {
            id: 1,
            prog_bar: $("#virat_prog")
        },
        {
            id: 2,
            prog_bar: $("#rohit_prog")
        },
        {
            id: 3,
            prog_bar: $("#babar_prog")
        },
        {
            id: 4,
            prog_bar: $("#ross_prog")
        },
        {
            id: 5,
            prog_bar: $("#aaron_prog")
        },
        {
            id: 6,
            prog_bar: $("#jonny_prog")
        },
        {
            id: 7,
            prog_bar: $("#fakhar_prog")
        },
        {
            id: 8,
            prog_bar: $("#shai_prog")
        },
        {
            id: 9,
            prog_bar: $("#faf_prog")
        },
        {
            id: 10,
            prog_bar: $("#david_prog")
        },
    ]


    let precentage;
    $("button").click(function () {
        total_vote++;

        let player = $(this).val();

        player = parseInt(player);
        votedatabase.map((data) => {

            if (player === data.id) {
                data.vote = data.vote + 1;
            }


        });

        //console.log(votedatabase[player-1].name);
        precentage = (votedatabase[player - 1].vote / total_vote) * 100;
        precentage = precentage.toFixed(2);
        //console.log(precentage);
        // console.log(total_vote);

        votedatabase.map((data) => {
            data.vote_p = (data.vote / total_vote) * 100;
            data.vote_p = data.vote_p.toFixed(1);
            // console.log(data);
        })


        Prog.map((progress, index) => {

            let prog_per = votedatabase[index].vote_p;
            //console.log(prog_per)
            progress.prog_bar.css({
                "width": `${prog_per}%`
            })
        })



        // $(this).next().children().css(
        //     {"width": `${votedatabase[player-1].vote}%`,
        //     "background":'red'
        // });
        $("#virat_v").text(`${votedatabase[0].vote} / ${total_vote}`);
        $("#rohit_v").text(`${votedatabase[1].vote} / ${total_vote}`);
        $("#babar_v").text(`${votedatabase[2].vote} / ${total_vote}`);
        $("#ross_v").text(`${votedatabase[3].vote} / ${total_vote}`);
        $("#aaron_v").text(`${votedatabase[4].vote} / ${total_vote}`);
        $("#jonny_v").text(`${votedatabase[5].vote} / ${total_vote}`);
        $("#fakhr_v").text(`${votedatabase[6].vote} / ${total_vote}`);
        $("#shai_v").text(`${votedatabase[7].vote} / ${total_vote}`);
        $("#faf_v").text(`${votedatabase[8].vote} / ${total_vote}`);
        $("#warner_v").text(`${votedatabase[9].vote} / ${total_vote}`);


        $("#virat_count").text(`Vote Count ${votedatabase[0].vote}/${total_vote}  (${votedatabase[0].vote_p}%) `);
        $("#rohit_count").text(`Vote Count ${votedatabase[1].vote}/${total_vote}  (${votedatabase[1].vote_p}%)`);
        $("#babar_count").text(`Vote Count ${votedatabase[2].vote}/${total_vote}  (${votedatabase[2].vote_p}%)`);
        $("#ross_count").text(`Vote Count ${votedatabase[3].vote}/${total_vote}  (${votedatabase[3].vote_p}%)`);
        $("#aaron_count").text(`Vote Count ${votedatabase[4].vote}/${total_vote}  (${votedatabase[4].vote_p}%)`);
        $("#jonny_count").text(`Vote Count ${votedatabase[5].vote}/${total_vote}  (${votedatabase[5].vote_p}%)`);
        $("#fakhr_count").text(`Vote Count ${votedatabase[6].vote}/${total_vote}  (${votedatabase[6].vote_p}%)`);
        $("#shai_count").text(`Vote Count ${votedatabase[7].vote}/${total_vote}  (${votedatabase[7].vote_p}%)`);
        $("#faf_count").text(`Vote Count ${votedatabase[8].vote}/${total_vote}  (${votedatabase[8].vote_p}%)`);
        $("#warner_count").text(`Vote Count ${votedatabase[9].vote}/${total_vote}  (${votedatabase[9].vote_p}%)`);





    });



});