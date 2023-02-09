import React, { Component } from 'react'
import { isBrowser } from '../../utils/utils'; 

if (!isBrowser) {
  window.initMap = function(){
  }
}
    
export default class Map extends Component {

  onLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    )
    this.props.onMount(map)
  }

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://maps.google.com/maps/api/js?key=${process.env.GATSBY_GOGGLE_API_KEY}&callback=initMap`
      const headScript = document.getElementsByTagName('script')[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener('load', () => {
        this.onLoad()
      })
    } else {
      this.onLoad()
    }
  }

  render() {
    return (
        <div style={{ height: `50vh` }} id={this.props.id} className="contactMap">
        </div>
    )
  }
}
