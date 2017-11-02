import React from 'react'
import PropTypes from 'prop-types'
import MonsterCard from './MonsterCard'

const MonsterSection = ({monster}) => {
  return (
    <div className='monsterContainer'>
      {
        monster.filter(monster => {
          return monster.name[0] === 'C'
        }).map(monster => {
          return <MonsterCard monster={monster} />
        })
        // monster.map((creep) => {
        //   return <MonsterCard monster={creep} />
        // })
      }
    </div>
  )
}

MonsterSection.propTypes = {
  monster: PropTypes.array.isRequired
}

export default MonsterSection
