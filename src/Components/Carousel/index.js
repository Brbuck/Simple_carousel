import React, { useState } from 'react';
import useSWR from 'swr'

import { Container, Slider } from './styles';
import Loading from '../Loading'

const fetcher = (url) => fetch(url).then((res) => res.json());

function Carousel() {
    const { data, error } = useSWR(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=pt-BR`, fetcher)
    const [current, setCurrent] = useState(0);
    const length = data?.results.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (error) return <div>failed to load</div>
    if (!data) return <Loading />
    return (
        <Container>
            <Slider>
                <span onClick={prevSlide}>&#8592;</span>
                <span onClick={nextSlide}>&#8594;</span>
                {
                    data.results.map((item, index) => (
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >

                            {index === current && (
                                <img key={index} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.original_title} />
                            )}
                        </div>

                    ))
                }
            </Slider>
        </Container>
    )
}

export default Carousel;