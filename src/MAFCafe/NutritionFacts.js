import React from 'react'

const NutritionFacts = ({item}) => {
  return (
    <div>
              <p>caffeine:{item.caffeine}</p>
              <p>calories:{item.calories}</p>
              <p>fiber:{item.fiber}</p>
              <p>protein:{item.protein}</p>
              <p>saturated fat:{item.saturatedFat}</p>
              <p>sodium:{item.sodium}</p>
              <p>sugar:{item.sugar}</p>
              <p>total carbs:{item.totalCarbs}</p>
              <p>total fat:{item.totalFat}</p>
              <p>trans fat:{item.transFat}</p>
    </div>
  )
}

export default NutritionFacts
