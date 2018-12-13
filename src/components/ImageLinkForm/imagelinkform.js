import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3 z-0'>
				{"This Web App called Smart Brain will detect faces in any picture that you present. \nJust copy and paste a picture's URL and it should be in either .jpg or .png format. \nGive it a try."}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-black'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;