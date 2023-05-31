export default (updateSettings, updatedPosition, settings, event) => {
  //Get and set Player postion
  const playerPosition = {
    get: () => `translate(${settings.position.x}px, ${settings.position.y}px)`,
    set: (direction, newValue) => {
      settings.position[direction] = newValue

    }
  }
  //Key map List
  const { keyMap } = settings

  switch (event.keyCode) {
    case keyMap.arrowRight:
      playerPosition.set('x', settings.position.x + settings.speed)
      break
    case keyMap.arrowLeft:
      playerPosition.set('x', settings.position.x - settings.speed)
      break
    case keyMap.arrowUp:
      playerPosition.set('y', settings.position.y - settings.speed)
      break
    case keyMap.arrowDown:
      playerPosition.set('y', settings.position.y + settings.speed)
      break
  }

  updatedPosition = playerPosition.get()
  updateSettings(updatedPosition, settings)

};







