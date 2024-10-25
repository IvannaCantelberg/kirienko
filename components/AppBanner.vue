<template>
    <article class="flex">
        <div :style="{ 'background-image': 'url(' + '/img/kirienko-profile-1.png' + '), radial-gradient(circle, rgb(17 27 36) 0%, rgb(11 18 26) 50%, rgb(11 18 26) 60%, rgb(8 13 17) 85%, rgb(8 13 17) 100%);' }" 
            class="bg-profile-image bg-image  pr-[8%]">
            <div class="text-white text-right mt-52 flex flex-col items-end">
                <h2 class="text-3xl mb-10"> I am <a href="http://" class="text-6xl text-accent-2 underline pl-5"> Tatjana Kirienko <i> &#x2197; </i></a> </h2> 
                <h2 class="text-2xl max-w-[550px]"> a textile artist in Arnhem, the Netherlands, with Ukrainian roots. </h2>
            </div>
            <h3 class="text-white text-2xl max-w-[550px] text-right ellipse-right">
                    Here you will find my Ukrainian art projects and details how you can participate with loving intention and creativity. 
                </h3> 
        </div>
        
    </article>
</template>

<style>
.bg-image {
    background-repeat: no-repeat;
    background-position: center;
}

.bg-profile-image {
    background-position: left bottom;
    background-repeat: no-repeat;
    width: 100vw;
    height:  calc(100vh);



    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30%;
}

.text-accent-2 {
    color: var(--color-text-accent-2);
}

</style>