export default (updateSettings, updatedPosition, player, settings, event) => {
  //function for check colision with another objects
  const checkColision = (identificator) => {
    const object = document.querySelector(identificator)
    let objectStyle = window.getComputedStyle(object);
    let matrix = new WebKitCSSMatrix(objectStyle.transform);
    const objectPosition = {
      x: matrix.m41,
      y: matrix.m42
    }
    const conditionalColisions = {
      colisionX: settings.position.x + settings.speed + player.clientWidth > objectPosition.x && settings.position.x + settings.speed + player.clientWidth < objectPosition.x + object.clientWidth,
      colisionY: settings.position.y + settings.speed + player.clientHeight >= objectPosition.y && settings.position.y <= objectPosition.y + object.clientHeight
    }
    if (conditionalColisions.colisionX && conditionalColisions.colisionY) {
      console.log('colidiu x & y')
    }
  }


  //Get and set Player postion
  const playerPosition = {
    get: () => `translate(${settings.position.x}px, ${settings.position.y}px)`,
    set: (direction, newValue) => {
      checkColision('.object')
      settings.position[direction] = newValue
      console.log('Position X:', settings.position.x)

    }
  }

  //Key map List
  const {
    keyMap
  } = settings

  //check key pressed
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