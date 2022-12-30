<script>
    import Home from "./home.svelte";
    import Hadiah from "./hadiah.svelte";
    let flowState = 0
    let firstCode = ''

    let increaseFlowState = () => {
        flowState++;
    }

    let setFirstCode = (param) => {
        firstCode = param
    }

    let handleShowOrder = () => {
        switch(flowState) {
            case 1 : return 
            case 2 : return 
        }
    }
</script>


{#if flowState == 0}
<Home increaseFlowState={increaseFlowState} setFirstCode={setFirstCode}/>
{:else if flowState == 1}
<Hadiah increaseFlowState={increaseFlowState} firstCode={firstCode}/>
{/if}