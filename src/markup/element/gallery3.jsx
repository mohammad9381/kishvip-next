import React, { useState } from "react";
import {Link} from 'react-router-dom'




const getFilterSections = (images)=>{
  const filters = []
  images.map(image=>{
    const index = filters.findIndex(filter=> filter.name === image.name)
    if(index === -1){
      filters.push({name:image.name,icon:image.icon})
    }
  })
  return filters
}

const filterImages = (filterKey,images)=>{
  const list = images.filter(image =>
    filterKey === 'all' ? image : image.name === filterKey
  );

  return list
}

const Gallery3 = props => {
  const [state, setState] = useState({
    list: props.images,
    filterKey: "Construction"
  });

  const { list, filterKey } = state;

  const filteredList  = filterImages(filterKey,list)
  const filters       = getFilterSections(list)
  const collumnCls = props.col ? props.col :"card-container col-lg-4 col-md-6 col-sm-6";

  return (
    <div class="content-block">
      <div class="portfolio " id="portfolio">
            <div class="site-filters m-b20 filters2">
                {/* FILTERS */}
                <ul class="filters " data-toggle="buttons">
                    {filters.map(filter =>(
                        <li class="btn" onClick={() => setState({ ...state, filterKey: filter.name })}>
                            <a class="">
                              <i class={filter.icon}></i>
                              <span>{filter.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row sp15">
                  {filteredList.map(image => (
                    <div className={collumnCls}>
                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect portbox3">
                            <img src={image.imgUrl} alt=""/>
                            <div class="overlay-bx">
                                <div class="portinner">
                                    <div class="port-up">
                                        <span class="text-primary">{image.title}</span>
                                        <h3 class="port-title"><Link href="/portfolio-details">{image.title2}</Link></h3>
                                    </div>
                                    <div class="port-down">
                                        <Link href="/portfolio-details" class="btn-link">View Detail <i class="la la-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
            </div>
        </div>
    </div>


  );
};

export default Gallery3;
