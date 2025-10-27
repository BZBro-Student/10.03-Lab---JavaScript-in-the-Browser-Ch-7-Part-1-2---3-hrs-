function myLineUp(event) {
    event.preventDefault();

    const selectedStatus = document.querySelector('input[name="status"]:checked');
    console.log(selectedStatus);
    const dateSelect = document.getElementById("date").value;
    console.log(dateSelect);
    const selectedPlayers = document.querySelectorAll('input[name="player"]:checked');
    const selectedPlayersArray = Array.from(selectedPlayers).map(player => player.value); 
    console.log(selectedPlayersArray);
    const selectedPlayersString = selectedPlayersArray.join('<br>');
    const output = `<p><strong>Status:</strong> ${selectedStatus.value}<br> <strong>Date:</strong> ${dateSelect}<br> <strong>Players:</strong><br> ${selectedPlayersString}</p>`;
    console.log(output);
    document.getElementById("output").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", myLineUp); 