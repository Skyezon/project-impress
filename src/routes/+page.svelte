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
</script>

<Home increaseFlowState={increaseFlowState} flowState={flowState} setFirstCode={setFirstCode}/>
<Hadiah increaseFlowState={increaseFlowState} flowState={flowState} firstCode={firstCode}/>