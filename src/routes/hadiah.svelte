<script>
    import Button, { Label } from '@smui/button';
import Card, {Content, MediaContent,Media,Actions, ActionButtons} from '@smui/card'
	import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield'
    import {code} from './const.svelte'
    import HadiahCard from './hadiah-card.svelte';
    import {HADIAH_CODE} from './const.svelte'
	import { onMount } from 'svelte';
    import TextPlugin from 'gsap/TextPlugin';
    import gsap from 'gsap'

    export let increaseFlowState
    export let firstCode


    let whatDone = {
        "BUNGA" : false,
        "BONEKA" : false,
        "BEKAL" : false
    }


    let handleTotalDone = () => {
        let totalDone = 0
        for (let [key,value] of Object.entries(whatDone)) {
            if (value){
                totalDone++
            }
        }
        if (totalDone == 3){
            console.log("trigger total done 3")
            //reverse animation
            reverse2.reverse(0)
            reverse1.reverse(0)
            
            //show input feedback field and after click jump to another page
        }
        console.log("trigger handle")
    }

    let modifyWhatDone = (key) => {
        whatDone[key] = true
        handleTotalDone()
    }

    let firstCard = '';

    let handleFirstCode = () => {
        switch (firstCode) {
            case code.DIABETES : {
                return "bgs bgs memang memang teh diabetes itu ga logika manisnya"
            }
            case code.MANIS : {
                return `gampang kali ya, soal anak tk maunya kau tulis teh diabetes aja biar lebih pas. kapan" aku datang lagi kesana ya`
            }
            case code.WSD : {
                return "weshhhhhh keren juga bisa tau yoda, keren kan semuanya"
            }
            case code.GATAU : {
                return "ini berarti aku baru balas kau aja sih, dan sesuai yang aku tulis, gitu aja ga tau. motu bener, dah-dah kita lanjut dulu "
            }
        }
    }

    let card1,card2,card3
    let firstCodeResHolder, questionHolder
    let questionWord = "Jadiii harusnya orang yang nerima ini ada dapat 3 barang yang lumayan menonjol, jadi apa aja itu kira-kira : "

    const wordTl = gsap.timeline()

    let reverse1,reverse2

    let feedback

    onMount(() => {
        const masterTl = gsap.timeline()
        gsap.registerPlugin(TextPlugin)
        masterTl.add(wordTl)
        reverse1 = wordTl.to(firstCodeResHolder,{duration:2, text: handleFirstCode(),ease: "none"})
        reverse2 = wordTl.to(questionHolder,{duration:1, text: questionWord, ease:"none",delay:1})

        masterTl.from(card1,{y:-100,opacity: 0})
        masterTl.from(card2,{y:-100,opacity: 0})
        masterTl.from(card3,{y:-100,opacity: 0})

    })
    
</script>

<div style="display: flex; height : 100%; justify-content : center; align-items:center; flex-direction:column">
    <div style="text-align: center;">
        <h6 bind:this={firstCodeResHolder}></h6>
        <h6 bind:this={questionHolder}></h6>
    </div>
    <LayoutGrid>
        <Cell span={4} >
            <div bind:this={card1}>
                <HadiahCard  frontDesc={"sesuatu yang lembut?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone}/>
            </div>
        </Cell>
        <Cell span={4}>
            <div bind:this={card2}>
                <HadiahCard  frontDesc={"sesuatu yang lumayan berwarna?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone}/>
            </div>
        </Cell>
        <Cell span={4}>
            <div bind:this={card3}>
                <HadiahCard  frontDesc={"mungkin sesuatu berguna?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone }/>
            </div>
        </Cell>
    </LayoutGrid>

    <div>
        <h6>ini sebenarnya tempat reaksimu/keluh kesahmu sih karena aku gk bisa liat disana secara langsung jadi isi disini aja ya</h6>
        <div>
            <Textfield marginheight={0} variant="outlined" bind:value={feedback} label="Yuk bisa yuk"></Textfield>
        </div>
    </div>

</div>