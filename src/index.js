const baseAPIURL = `http://localhost:3000`
const groupsURL = `${baseAPIURL}/a_cappella_groups`

// Your list of a cappella groups must be fetched
fetch(groupsURL)
  .then(resp => resp.json())
  .then(data => {
    data.forEach(groupData => {
      renderGroups(groupData)
    })
  })

const renderGroups = groupData => {
  const groupEl = document.createElement('tr')
  groupEl.innerHTML =  `
  <td>${groupData.college.name}</td>
    <td>*${groupData.name}*</td>
    <td>${groupData.membership}*</td>
    <td>${groupData.college.division}</td>
    `
   const trophyEl = document.createElement('td')
   trophyEl.innerHTML = `
   <img src='./assets/trophy.png'/>
   `
   const table= document.querySelector("#table-body")

   groupEl.appendChild(trophyEl)
   trophyEl.addEventListener('click', () =>
   {

     table.removeChild(groupEl)
     const winnerName = document.querySelector('#winner')
     winnerName.innerText = `Winner: ${groupData.name}`

   })
     table.appendChild(groupEl)

  }
