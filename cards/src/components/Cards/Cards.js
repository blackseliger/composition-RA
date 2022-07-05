import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import CardPic from '../CardPic/CardPic'
import eldenRing from '../../assets/img/eldenRing.jpeg'
function Cards(props) {
    const infoCard = {
        title: 'No pic',
        text: 'No Elden Ring',
        link: 'Go somewhere',
    }

  return (
    <>
    <Card {...infoCard}>
        <CardPic></CardPic>
    </Card>
    <Card {...infoCard} title={'Elden Ring Poster'} text={'Ohhh ooo Elden Ring'}>
        <CardPic  pic={eldenRing}></CardPic>
    </Card>
    </>
  )
}

Cards.propTypes = {}

export default Cards
