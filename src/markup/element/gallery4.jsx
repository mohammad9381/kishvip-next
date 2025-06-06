import React, { useState } from "react";
import {Link} from 'react-router-dom'




const getFilterSections = (images)=>{
  const filters = ['all']
  images.map(image=>{
    if(filters.indexOf(image.name) === -1){
      filters.push(image.name)
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
    filterKey: "all"
  });

  const { list, filterKey } = state;

  const filteredList  = filterImages(filterKey,list)
  const filters       = getFilterSections(list)
  const collumnCls = props.col ? props.col :"col-md-3";

  return (
      <>
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="site-filters m-b20">
                    <ul class="filters" data-toggle="buttons">
                        {filters.map(filter=>(
                            <li data-filter="" class="btn">
                                <Link
                                 onClick={() => setState({ ...state, filterKey: filter })}
                                class="site-button btnhover20 outline outline-2 button-sm">
                                    <span>{filter}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


        <ul id="masonry" class="dlab-gallery-listing text-center gallery-grid-4">
          <div className="row">
            {filteredList.map(image=>(
              <div className="col-lg-6 col-md-6 col-sm-6">

                <li class="card-container  beer-keg brewing wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div class="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1 m-b30 radius-sm">
                        <img src={image.imgUrl} alt=""/>
                        <div class="overlay-bx">
                            <div class="portinner">
                                <h3 class="port-title"><Link href="/portfolio-details">{image.title}</Link></h3>
                            </div>
                        </div>
                    </div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </>
    );
};

export default Gallery3;
