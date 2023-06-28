import {Container, usePixiApp} from 'react-pixi-fiber';
import {usePixiSpine} from '@/hooks/usePixiSpine';
import {useEffect} from 'react';
import {Spine} from "@pixi-spine/all-4.1";

let spineBoyPro: Spine;

type PixiCharacterViewProps = {
    characterPose: string
    characterTop: string
}

export function PixiCharacterView(props: PixiCharacterViewProps) {
    const app = usePixiApp();
    const { spineRig } = usePixiSpine({
        initialPose: 'eyeblink',
        spineJsonUrl: '/assets/Hero/festive-spineboy-alt-hands.json',
    });

    useEffect(() => {
        if (spineRig) {
            spineBoyPro = new Spine(spineRig.spineData)
            app.renderer.resize(500, 700);
            spineBoyPro.x = app.screen.width / 2;
            spineBoyPro.y = app.screen.height - 20;
            spineBoyPro.scale.set(0.4);
            spineBoyPro.scale.x *= -1;
            app.stage.addChild(spineBoyPro as any);

           // change hair color
            spineBoyPro.skeleton.setSkinByName('top-1')
            spineBoyPro.skeleton.findSlot("hair-back").color.setFromString('FCBA03')
        }

        return () => {
            if (spineRig) {
                app.stage.removeChild(spineBoyPro as any);
            }
        };
    }, [app, spineRig]);

    useEffect(() => {
        if (spineBoyPro && spineBoyPro.state.hasAnimation(props.characterPose)) {
            spineBoyPro.state.setAnimation(0, props.characterPose, false);
        }
    }, [props.characterPose])

    useEffect(() => {
        if (spineBoyPro) {
            spineBoyPro.skeleton.setSkinByName(props.characterTop)
        }
    }, [props.characterTop])


    return <Container />;
}
