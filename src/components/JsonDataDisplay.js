import React from 'react'
import JsonData from './data.json'
import '../App.css';
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td><center>{info.id}</center></td>
					<td>{info.name}</td>
					<td><center>{info.attendance}</center></td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table">
				<thead>
					<tr>
					<th>Roll Number</th>
					<th>Student Name</th>
					<th>Attendance %</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
