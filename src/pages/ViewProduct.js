import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei/useGLTF';
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { ContactShadows } from "@react-three/drei/ContactShadows";
import { Environment } from "@react-three/drei/Environment";
import { Helmet } from "react-helmet";


export default function App() {
    return (
        <Canvas>
            <Helmet>
                <title>
                    View 3D Model | KARTHAVYA
                </title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Helmet>
            <ambientLight intensity={ 0.5 }/>
            <Suspense fallback={ null }>
                <Device/>
                <Environment files="hdr.hdr"/>
                <ContactShadows rotation={ Math.PI / 2 } position={ [ 0, -0.8, 0 ] } opacity={ 0.25 } width={ 10 }
                                height={ 10 } blur={ 2 } far={ 1 }/>
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

function Device( props ) {
    const group = useRef()
    const { nodes, materials } = useGLTF( '/device.glb' )
    return (
        <group ref={ group } { ...props } dispose={ null }>
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body443.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body193.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body107.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body116.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body126.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body136.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body146.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body156.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body166.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body176.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body184.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body194_1.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body204.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body214.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body224.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body234_1.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body244.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body254.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body264.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body274.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body284.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body294.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body231.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body314.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body324.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body334_1.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body344.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body364.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body374.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body394.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body330.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body414.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body423_1.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body433.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body453.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body463.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body473.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body483.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body420.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body518.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body612.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body79.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body89.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body99.geometry }/>
            </mesh>
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body230.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body329.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body419.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body517.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body611.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body78.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body88.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body98.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body106.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body125.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body135.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body145.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body155.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body165.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body175.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body183.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body193_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body203.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body223.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body233.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body243.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body253.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body263.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body273.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body283.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body303.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body333.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body353.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body363.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, 0.01, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body383.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body393.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body403.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body422.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body432.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body452.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body462.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body472.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body195.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body233_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body332.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body422_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body520.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body614.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body711.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body811.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body911.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body109.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body118.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body128.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body138.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body148.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body158.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body168.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body178.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body186.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body196.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body206.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body216.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body226.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body236.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body246.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body256.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body266.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body276.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body286.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body296.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body336.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body346.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body356.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body386.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body396.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body406.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body416.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body455.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body465.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body475.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body485.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body197.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body235.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body334.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body424.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body522.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body616.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body713.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body813.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body913.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1011.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1110.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1210.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1310.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1410.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1510.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1610.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1710.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body188.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body198.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body208.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body218.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body228.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body238.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body248.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body258.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body268.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body278.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body288.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body298.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body308.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body328.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, 0.01, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body338.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body348.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body358.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body388.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body398.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body408.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body418.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body427.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body437.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body457.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body467.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body477.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body487.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body194.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body232.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body331.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body421.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body519.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body613.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body710.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body810.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body910.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body108.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body117.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body127.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body137.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body147.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body157.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body167.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body177.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body185.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body195_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body205.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body215.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body225.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body235_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body245.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body255.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body265.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body275.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body285.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body295.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body305.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body325.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body335.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body395.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body424_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body454.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body464.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body474.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body484.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body196_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body234.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body333_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body423.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body521.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body615.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body712.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body812.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body912.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body1010.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body119.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body129.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body139.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body149.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body159.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body169.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body179.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body187.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body197_1.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body207.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body217.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body227.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body237.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body247.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body257.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body267.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body277.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body287.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body297.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body307.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body317.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body327.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body337.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body347.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body357.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body367.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, 0.01, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body387.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body397.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body407.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body417.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body426.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body436.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body446.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body456.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body466.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body476.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(175,155,134)' ] }
                geometry={ nodes.Body486.geometry }
                position={ [ 0, 0, -0.79 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(160,160,160)' ] } geometry={ nodes[ 'Body1-3A107' ].geometry }/>
                <mesh material={ materials.Plastic } geometry={ nodes[ 'Body1-3A107_1' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.8 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A78' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body1-3A78_1' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(247,224,153)' ] } geometry={ nodes[ 'Body3-3A26' ].geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body3-3A26_1' ].geometry }/>
                <mesh material={ materials[ 'Opaque(2,60,210)' ] } geometry={ nodes[ 'Body3-3A26_2' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body3-3A26_3' ].geometry }/>
                <mesh material={ materials[ 'Plastic 8' ] } geometry={ nodes[ 'Body3-3A26_4' ].geometry }/>
                <mesh material={ materials[ 'Metal 3' ] } geometry={ nodes[ 'Body3-3A26_5' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(247,224,153)' ] } geometry={ nodes[ 'Body1-3A74' ].geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A74_1' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body1-3A74_2' ].geometry }/>
                <mesh material={ materials[ 'Plastic 8' ] } geometry={ nodes[ 'Body1-3A74_3' ].geometry }/>
                <mesh material={ materials[ 'Brass 2' ] } geometry={ nodes[ 'Body1-3A74_4' ].geometry }/>
                <mesh material={ materials[ 'Metal 5' ] } geometry={ nodes[ 'Body1-3A74_5' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(202,209,238)' ] } geometry={ nodes[ 'Body3-3A25' ].geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body3-3A25_1' ].geometry }/>
                <mesh material={ materials[ 'Matte 23' ] } geometry={ nodes[ 'Body3-3A25_2' ].geometry }/>
                <mesh material={ materials[ 'Matte 24' ] } geometry={ nodes[ 'Body3-3A25_3' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body3-3A25_4' ].geometry }/>
                <mesh material={ materials[ 'Matte 29' ] } geometry={ nodes[ 'Body3-3A25_5' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(160,160,160)' ] } geometry={ nodes[ 'Body1-3A91' ].geometry }/>
                <mesh material={ materials[ 'Matte 19' ] } geometry={ nodes[ 'Body1-3A91_1' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(160,160,160)' ] } geometry={ nodes.Body3_1.geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes.Body3_2.geometry }/>
                <mesh material={ materials[ 'Opaque(202,209,238)' ] } geometry={ nodes.Body3_3.geometry }/>
                <mesh material={ materials.Glass } geometry={ nodes.Body3_4.geometry }/>
                <mesh material={ materials[ 'Glass 2' ] } geometry={ nodes.Body3_5.geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A100' ].geometry }/>
                <mesh material={ materials[ 'Matte 18' ] } geometry={ nodes[ 'Body1-3A100_1' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.8 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A103' ].geometry }/>
                <mesh material={ materials.Wax } geometry={ nodes[ 'Body1-3A103_1' ].geometry }/>
                <mesh material={ materials.Metal } geometry={ nodes[ 'Body1-3A103_2' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(202,209,238)' ] } geometry={ nodes[ 'Body1-3A50' ].geometry }/>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A50_1' ].geometry }/>
                <mesh material={ materials[ 'Glass 3' ] } geometry={ nodes[ 'Body1-3A50_2' ].geometry }/>
                <mesh material={ materials.Brass } geometry={ nodes[ 'Body1-3A50_3' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A2' ].geometry }/>
                <mesh material={ materials[ 'Matte 13' ] } geometry={ nodes[ 'Body1-3A2_1' ].geometry }/>
                <mesh material={ materials[ 'Matte 16' ] } geometry={ nodes[ 'Body1-3A2_2' ].geometry }/>
                <mesh material={ materials[ 'Matte 17' ] } geometry={ nodes[ 'Body1-3A2_3' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.79 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A3' ].geometry }/>
                <mesh material={ materials[ 'Glass 4' ] } geometry={ nodes[ 'Body1-3A3_1' ].geometry }/>
                <mesh material={ materials[ 'Matte 13' ] } geometry={ nodes[ 'Body1-3A3_2' ].geometry }/>
                <mesh material={ materials[ 'Matte 14' ] } geometry={ nodes[ 'Body1-3A3_3' ].geometry }/>
                <mesh material={ materials[ 'Matte 15' ] } geometry={ nodes[ 'Body1-3A3_4' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.8 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A53' ].geometry }/>
                <mesh material={ materials.Matte } geometry={ nodes[ 'Body1-3A53_1' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body1-3A53_2' ].geometry }/>
            </group>
            <group position={ [ 0, 0, -0.8 ] } rotation={ [ 1.57, -1.57, 0 ] }>
                <mesh material={ materials[ 'Opaque(175,155,134)' ] } geometry={ nodes[ 'Body1-3A57' ].geometry }/>
                <mesh material={ materials[ 'Matte 2' ] } geometry={ nodes[ 'Body1-3A57_1' ].geometry }/>
                <mesh material={ materials[ 'Plastic with Lattice Pattern' ] }
                      geometry={ nodes[ 'Body1-3A57_2' ].geometry }/>
            </group>
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body318.geometry }
                position={ [ 0, 0, -0.8 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body425.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body335_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1111.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1511.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body523.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1211.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1012.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body617.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body914.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body236_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1411.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body714.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1104.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body814.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Matte 9' ] }
                geometry={ nodes.Body1311.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body541.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body279.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body299.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body259.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body329_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body581.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body209.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body399.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body349.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body249.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body448.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body521_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body511.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body269.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body492.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body631.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body468.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body611_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body1711.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body438.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body488.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body501.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body289.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body309.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body531.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body379.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body1611.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body369.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body319.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body458.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body389.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body409.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body239.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body621.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body199.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body571.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body478.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body229.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body219.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body359.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body601.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body189.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body428.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body339.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body551.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body561.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body591.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
            <mesh
                material={ materials[ 'Opaque(160,160,160)' ] }
                geometry={ nodes.Body419_1.geometry }
                position={ [ 0, 0, -0.82 ] }
                rotation={ [ 1.57, -1.57, 0 ] }
            />
        </group>
    )
}

useGLTF.preload( '/device.glb' )
