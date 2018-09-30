import React from 'react';

import Range from './Range';

function Settings({ settings, handleChange, resetImg }) {
	const { contrast, hue, brightness, saturate, sepia } = settings;

	return (
		<aside className="settings">
			<Range
				name="contrast"
				title="Контраст"
				value={contrast}
				min={0}
				max={200}
				onChange={handleChange} />

			<Range
				name="hue"
				title="Оттенок"
				value={hue}
				min={-360}
				max={360}
				onChange={handleChange} />

			<Range
				name="brightness"
				title="Яркость"
				min={0}
				max={200}
				value={brightness}
				onChange={handleChange} />

			<Range
				name="saturate"
				title="Насыщенность"
				min={0}
				max={100}
				value={saturate}
				onChange={handleChange} />

			<Range
				name="sepia"
				title="Сепия"
				min={0}
				max={100}
				value={sepia}
				onChange={handleChange} />
			<button className="reset" onClick={resetImg}>
				Сбросить фильтры
			</button>
		</aside>
	);
}
export default Settings;
