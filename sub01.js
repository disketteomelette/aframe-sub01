      AFRAME.registerComponent('sub01-bounce', {
        init: function () {
          var el = this.el;
          var defaultPosition = el.getAttribute('position').clone();
          var animationActivated = false;

          el.addEventListener('mouseenter', function () {
            if (!animationActivated) {
              el.setAttribute('animation', {
                property: 'position',
                from: defaultPosition,
                to: {x: defaultPosition.x, y: defaultPosition.y + 0.1, z: defaultPosition.z},
                dur: 200,
                easing: 'linear',
                loop: true,
                dir: 'alternate'
              });

              animationActivated = true;
            }
          });
        }
      });

      AFRAME.registerComponent('sub01-reload', {
        init: function () {
          var el = this.el;

          el.addEventListener('click', function () {
            // Verifica si estamos en modo VR
            if (AFRAME.utils.device.checkHeadsetConnected()) {
              // Recarga la página sin salir del modo VR
              document.location.reload();
            } else {
              // Si no estamos en modo VR, simplemente recarga la página
              window.location.reload();
            }
          });
        }
      });

      AFRAME.registerComponent('sub01-breath', {
        init: function () {
          var el = this.el;
          var defaultPosition = el.getAttribute('position').clone();

          el.setAttribute('animation', {
            property: 'position',
            from: defaultPosition,
            to: {x: defaultPosition.x, y: defaultPosition.y + 0.02, z: defaultPosition.z},
            dur: 900,
            easing: 'linear',
            loop: true,
            dir: 'alternate'
          });
        }
      });