<script>
    import DeviceDetector  from 'svelte-device-detector'
export let increaseFlowState
    import Button, { Label } from '@smui/button';


</script>

<div style="display: flex; flex-direction:column; justify-content: center; align-items:center; height:100%;">
    <DeviceDetector showInDevice="desktop">
        <Button variant="outlined" on:click={() => increaseFlowState()}>
            <Label>bgs bgs diikutin terus ya</Label>
        </Button>
    </DeviceDetector>
    
    <DeviceDetector showInDevice="mobile">
        <p>
            ini pake hp ya? ganti dulu ke laptop ya lol
        </p>
        <p>klo mau pergi pergi aja kalau gitu, ini semua bisa nantian</p>
        <p>
            ketik j ini di laptop : https://s.id/mulai-bingung
        </p>

    </DeviceDetector>
    
</div>
