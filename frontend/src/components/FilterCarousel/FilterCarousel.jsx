//import main libraries for React
import React, {Component} from 'react';

import Image from './components/Image';
import Settings from './components/Settings';
import Filter from './components/Filter';
import FilterList from './components/FilterList';

export default class FilterCarousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      image: this.props.image,
      selectedFilter: '',
		    settings: {
			       contrast: 100,
			          hue: 0,
			             brightness: 100,
			                saturate: 100,
			                   sepia: 0
                       }
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
    this.resetImg = this.resetImg.bind(this);
  }
  handleChange(event){
    const setting = event.target.id;
		const value = event.target.value;
		const settings = {...this.state.settings, [setting]: value};

		this.setState({selectedFilter: '', settings});
  }

  updateSettings(selectedFilter, settings){
		this.setState({selectedFilter, settings});
  }
  resetImg = () => {
		const settings = {contrast: 100, hue: 0, brightness: 100, saturate: 100, sepia: 0};
		this.setState({selectedFilter: '', settings});
	}

  render(){
    return(
      <div className="filterCarousel">
				<section className="content">
					<Settings settings={this.state.settings} handleChange={this.handleChange} resetImg={this.resetImg}/>

					<main className="main">
						<Filter settings={this.state.settings}>
							<Image src={this.state.image}/>
						</Filter>

						<FilterList
							image={this.state.image}
							settings={this.state.settings}
							selectedFilter={this.state.selectedFilter}
							updateSettings={this.updateSettings}/>
					</main>
				</section>

			</div>
    )
  }
}
