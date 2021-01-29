module.exports = function(componentName) {
  return `
  import React from 'react'
  const ${componentName} = (props)=> {
    return (
      <div></div>
    )
  }
  export default ${componentName}
  `

}