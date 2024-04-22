import { OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience()
{

    const { perfVisible } = useControls({
        perfVisible: true
    })

    const { position, color, visible, choice } = useControls( 'shapes', {
        // position: -2
        position: {
            value: { x: -2, y: 0},
            joystick: 'invertY',
            // value: { x: -2, y: 0, z: 0},
            // min: -4,
            // max: 4,
            step: 0.01
        }, 
        color: '#ff0000',
        visible: true,
        clickMe: button(() => { console.log('ok') }),
        choice: { options: [ 1, 2, 3 ] },
    })
    console.log(position)

    const { scale } = useControls( 'scale', {
        scale: {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5,
        }, 
    })
    console.log(scale)

    return <>

        { perfVisible ? <Perf position="top-left" /> : null }

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh position={ [ position.x, position.y, 0]  }>
            <sphereGeometry />
            <meshStandardMaterial color={ color } />
        </mesh>

        <mesh position-x={ choice } scale={ scale } visible={ visible }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}