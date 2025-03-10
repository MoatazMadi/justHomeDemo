<template>
    <main class="bg-[#FFF8F6] pb-16">
        <section class="container grid grid-cols-1 gap-20 px-2  md:grid-cols-2 justify-items-center py-20 lg:py-32">
            <!-- left section -->
            <div class="">
                <h1 class="text-3xl md:text-4xl font-semibold">What our customers are
                    saying us?</h1>
                <p class="text-lg my-8">Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose injected humour and the like.</p>
                <div class="flex gap-4 justify-start items-top">
                    <div>
                        <p class="font-bold text-2xl">10m+</p>
                        <p>Happy People</p>
                    </div>
                    <div>
                        <p class="font-bold text-2xl">4.88</p>
                        <p>Overall rating</p>
                        <p class="flex gap-1 mt-2">
                            <svg v-for="i in 5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" class="size-4 fill-amber-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <!-- right section -->
            <div class="">
                <div class="flex gap-4 mb-4 w-full">
                    <img src="/imgs/portary.png" class="size-16" />
                    <div>
                        <h3 class="font-semibold">Cameron Williamson</h3>
                        <span>Designer</span>
                    </div>
                    <span class="flex justify-end flex-1">
                        <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.069 38C7.03248 38 4.66021 36.9524 2.95218 34.8571C1.24415 32.6667 0.390137 29.4286 0.390137 25.1429C0.390137 20.6667 1.38649 16.381 3.37919 12.2857C5.46678 8.19048 8.40839 4.14286 12.204 0.142864C12.2989 0.0476213 12.4412 0 12.631 0C12.9156 0 13.1054 0.142858 13.2003 0.428574C13.3901 0.619048 13.4375 0.857143 13.3427 1.14286C11.0653 4.19048 9.49963 7.14286 8.64562 10C7.88649 12.7619 7.50693 15.8571 7.50693 19.2857C7.50693 21.8571 7.83905 23.8571 8.50328 25.2857C9.16751 26.7143 10.069 28 11.2076 29.1429L5.7989 30.1429C5.70401 28.5238 6.13102 27.2857 7.07992 26.4286C8.12372 25.5714 9.45219 25.1429 11.0653 25.1429C13.058 25.1429 14.5762 25.7143 15.62 26.8571C16.7587 28 17.3281 29.5714 17.3281 31.5714C17.3281 33.6667 16.6638 35.2857 15.3354 36.4286C14.1018 37.4762 12.3463 38 10.069 38ZM31.9886 38C28.9521 38 26.5799 36.9524 24.8719 34.8571C23.2587 32.6667 22.4521 29.4286 22.4521 25.1429C22.4521 20.5714 23.4485 16.2381 25.4412 12.1429C27.4339 8.04762 30.3755 4.04762 34.266 0.142864C34.3609 0.0476213 34.5032 0 34.693 0C34.9777 0 35.1675 0.142858 35.2624 0.428574C35.4521 0.619048 35.4996 0.857143 35.4047 1.14286C33.1273 4.19048 31.5616 7.14286 30.7076 10C29.9485 12.7619 29.5689 15.8571 29.5689 19.2857C29.5689 21.8571 29.8536 23.9048 30.4229 25.4286C31.0872 26.8571 31.9886 28.0952 33.1273 29.1429L27.8609 30.1429C27.766 28.5238 28.193 27.2857 29.1419 26.4286C30.0908 25.5714 31.4193 25.1429 33.1273 25.1429C35.12 25.1429 36.6383 25.7143 37.6821 26.8571C38.8208 28 39.3901 29.5714 39.3901 31.5714C39.3901 33.6667 38.7259 35.2857 37.3974 36.4286C36.1638 37.4762 34.3609 38 31.9886 38Z"
                                fill="#1A1A1A" />
                        </svg>

                    </span>
                </div>
                <p>Searches for multiplexes, property comparisons, and the loan
                    estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dores.</p>
                <div class="mt-8 flex gap-8">
                    <span
                        class="py-1 px-8 align-text-top pb-2 border rounded-full font-bold text-xl  cursor-pointer hover:bg-white">
                        &lt;
                    </span>
                    <span
                        class="py-1 px-8 align-text-top pb-2 border rounded-full font-bold text-xl  cursor-pointer hover:bg-white">
                        &gt;
                    </span>
                </div>
            </div>
        </section>
        <hr class="my-4 mb-12 text-red-100" />
        <p class="text-center mt-5 text-xl">Thousands of world’s leading companies trust Space</p>
        <!-- bottom icon -->
        <div class="flex items-center justify-evenly flex-wrap gap-x-20 gap-y-14 pt-16 pb-20 container">
            <svg width="80" height="48" viewBox="0 0 85 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="84" height="26" transform="translate(0.5 0.189941)" fill="url(#pattern0_2_772)" />
                <defs>
                    <pattern id="pattern0_2_772" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_772" transform="scale(0.0119048 0.0384615)" />
                    </pattern>
                    <image id="image0_2_772" width="84" height="26" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,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" />
                </defs>
            </svg>
            <svg width="64" height="48" viewBox="0 0 83 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="83" height="21" transform="translate(0 0.689941)" fill="url(#pattern0_2_773)" />
                <defs>
                    <pattern id="pattern0_2_773" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_773" transform="scale(0.0120482 0.047619)" />
                    </pattern>
                    <image id="image0_2_773" width="83" height="21" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAVCAYAAAA6s9JxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgB5VnLUeNAEB0b873gC1V8LiKCNRGsHMGyEWBHgIkAEwHeCJAjwBuBtREsRLDiwKeKi/dCUVDgfU81co3b0uhjeS9+VbKknk/3vGlN94wraomxt7fXqVQqdVUC3t/fBzVbhd3dXUfKnp6eApUC2S5Lm7i2r6+vIyKuLAl5dFWrVR+34Xg8npvQtbW1oJJUeHBw0IKSKyEevby8HJoDjANmfIgZd6N39NN7fHw8UymAzkvU7Rgi7+Hhoc0HEonB/1EZgD581O1/fHz4aeRCZ0OVQCjG265ayk9jZPWtra2Oyq+ow0/KVmd/f/9cEFkYnEg6Aggdpum9v7+/wa2JNiM1J2LJ5GzBmEZCm9M6oHICxl7Cu07iyjBgTlxXlQ+HejlRtkplERpLJog8tbSpb25utlQRZdVqb2dnZ2qSOHEYRE8VAOx0sAxUogs4+vz8bEMeiKpdTNixra+IUFw3bG+7kvqYCUB6kW8Jo3/A0AnBeKaHFSGgvrq6eg0dTa5lWtdQlQRNyA369dkv7HSiMjxf4YPybeu9bn+kUgBPH8fJZzxzZWXFNd+5mK+vr3fFJ9CAwa4qBgaSIT2S9zIiqQQnCv22hbi+sbHRsLWDTSdzjGuWTBhxLt77QRCM6J2mHORa1yGBgXh30N9v3g0ZdfiqJIBQH7fAlMHmxE+dREK/p+bAFJl6VhxRx+cP8qieMMzNMYu3XMtsFbQn3akSgT5/CZETV68MIokpMvHZyWjrRXma9k4/pX4i0I+H20VC8QXy0IFaPLaloCwiiQmZcYEH3tQ336FUknGcJ01CxO1y2RDiC8rVAoCvZ9tWXiaRxCSaM/Cg46lCeJ6LyOVa2odJPAJkV2UEPLCFPr/gkcFgsCgiNWTAuY0edC7tqRIxIVMGHo0sQYZJfC9ti2kC62/z7e3tElvT1C1mUeiNgGPKMMbJUoKtZh3OospESGZC4MmKMIkHl5nzTq6/uLXVgqA/3yl7mGzrCG8FI77lQCXsg2liXEoXkikDCRWjQT+hQ5Z/NQ8y5kji5wK86wgDP9Q2cHAOrm+wz5V1McbvKgO4OcE1I9e7n6Z+5dZzJkeuJex4GF29BH2hJ5tkKp3EZ5n5MlGr1a4zVBvB1jO9uymEiMgos2Ff8P4ZQqtyx0PlOEe0pikkTaZJOZP4/wLaCLuaGLynCkISGSHucKSG9IefqFnxZ5ZgolMcxxA5PMR4fn6mkjtxIJA1OI1Eu79CZ2BrrAfGg4pbBps8B8VxSCIygumhoX61pOCyxLOBpPI0Ik0wzYJTOktLJmH7G0T+ZZIF/wDjDj1mOuu9SAAAAABJRU5ErkJggg==" />
                </defs>
            </svg>
            <svg width="64" height="48" viewBox="0 0 75 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="74" height="43" transform="translate(0.5 0.689941)" fill="url(#pattern0_2_774)" />
                <defs>
                    <pattern id="pattern0_2_774" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_774" transform="scale(0.0135135 0.0232558)" />
                    </pattern>
                    <image id="image0_2_774" width="74" height="43" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAArCAYAAADfeB6OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATpSURBVHgB7VpLbttIEC3ZY/gDG6ONAX8Ww5xg5BOMfII4J4h0AjvLWVk6QZITWDmBlBNYcwLrBtYs/AG8kWHDP/gz7wndQqXVEdkkExkTPoAQm+xP8XVXdVW1RAoUeJXY3Nz8uLGx8bK+vr4nUwLGPoQMx/jdkZwxIzlgbW0tenl5GRJUKpV2ZQqADFWMXcVthKsmOSMXol4hfpec8X8lKncURCVEYqJoA7IYyTKAPmq0Z5ISlIGXpARl4DekkSERUex4ZmbmEMayjV2lISmwuLjYRh8H7EdSALtqjW15pSVraWnpiN+A60ACkYio2dnZqir+ISkA4SJzG2FWg/vArhrZe5BVlUCYVRQ5siRGYaMSYkTU6upqJYv9yAOvWYYhUdT/ubm5Iyzp4yzGMgsgw56R4YhGV6YARhdGhjE7OiQqq/7ngefn57fmtrywsFCRKQA82F19zI4WNiohCqISwqrewD7Q9xZQi4HkiNvb20v3GbbsiWP45AoB1HniN7pwZbREdXB1zdVxG83Pz/P5F74HaU1JAdOuhz4+DAD3PYgavsfVOT8/73pkaFkZ0VdLAtHv9zlmE+37+P0igTKWJAcYz/3YynR6evpGfjK4W9vdimSenZ1tS47IxUaFLusfAUQPP3TcWckBWKV3KysrJZBEov6+vr7uy0/G1dXV+fLyMldyGSurzrIUKFCgwC+CYPeAASt2uWHQend3N/D5REmho3T4Tv2QNknHTjOGD4mJMsdB++ZISKMFv6mu6sX6VAg4d1GngR1ylCWgZ/7w8LB9cXHRc+tzcpCd3EWdPd2G/aNchc/0r28M1K/htuLU78DrboZO8G9JKiH9u4+fhu+dzjyE9EVXwumnDF9oLL1i09C4jdw2YjKWLngQ6pnQYX2SDdJ3oBXbISsslijmqiBgQz8zYQBXQZq8UU3108XPV1OMnp6exmbZkqQeDejUmrHLHnk/cpWJI6+T/iX5bfxuSULEEoVB9vWAuOo6FgtJ9EVRVIZ6Rbb8+Pj4wadqFmaSIjX+Z6hNw6oNVxts1aWSZXRibdC5ubmp2/rmYMR+T4XH/1DbT5IAE0MYCEr9jpSgTTdg9QWw3wMDU50lQDaxTWGZfvXVR5D6XhVb+Kg9bVuoOrqMVVJTstI+vtPvUabK64D4rSTERKIgaKSKAwjWkoxwsg+0GcP0KwhruylgrS64/yeub8defv1OtY6v/zhMJAozlHvumksdZNWtnbOA0Ds4+ws+bwtF2qA9Lnug7Uc5r4MHrkwQ9gbkbGlVIFl6VWkyHTX0Au376t6rVpj8977+4zCRqJOTExLVU4McuEc5WY6X2D8Iq+lnWFWjf6JodeN2b1yLEWhDNbEgs6te84CgbeVjPe6I8u2u603g+RDrcOqEmELPCB9BuJ5OksU5nPRx2B5tL42wf1mfhzPMlWbrcpe8v78/cmzVwOy+ZT6nXdIOJ8j4hGff/EeL9WlGtLPqjhWHWPeAuxpmkgZYz2bFDCahMKRUVVm//qwL3CVBPCfh0JJlPrbitBsBG0MD5P6pHU5D6KiOIXosA8o/cJBQ+HNdN0RKlOHktoqVs20cRBehxnGsvsmFv/P5NHQB+FFGTdy2A/cQgORyhfs2DNO+iTZbPq+cWVJzkFLTJoCYSlCcpY/QIFePlSUoLlCgQIHXjP8Azl7RSKAlcuQAAAAASUVORK5CYII=" />
                </defs>
            </svg>
            <svg width="128" height="48" viewBox="0 0 123 26" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="122" height="25" transform="translate(0.5 0.689941)" fill="url(#pattern0_2_775)" />
                <defs>
                    <pattern id="pattern0_2_775" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_775" transform="scale(0.00819672 0.04)" />
                    </pattern>
                    <image id="image0_2_775" width="122" height="25" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,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" />
                </defs>
            </svg>
            <svg width="80" height="48" viewBox="0 0 83 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="82" height="26" transform="translate(0.5 0.189941)" fill="url(#pattern0_2_776)" />
                <defs>
                    <pattern id="pattern0_2_776" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_776" transform="scale(0.0121951 0.0384615)" />
                    </pattern>
                    <image id="image0_2_776" width="82" height="26" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAaCAYAAAAkJwuaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgB3VlZTiNJEE2DEZvQ1A8SmzQ1J5jiBJgTYE4w9gkwJ8A+AfTnfHX1CaBPQM0Jxn0Caj5YJH4sIbEv85470h1Osry1u+32k6zKLTJfRmZGRKZzKysroRFcXV2lZgRYXV0tTk1NBS8vL8moOLjoVy95TOBM5XPmJ2N9ff3w7e2tgp8BlxRFf5gxALic4hMyjYUOLy8v/+vY3oweBZUOQfp3JjY2NgpIn/K3trZWNWOOvBkxsBM/4xNJOrUrj3SYy+UK0iw1Y46RK/Li4qIKe5RCacHd3V1sflF0VWQAzM/PF7BDAky28fz8nF5fX9d7kZubm+NOC7vJwZjHZkAsLy9H09PTkWRT9JV0k+mHmwYWvGBloI+6dkI52J83m8HuyOnBFhYW9iBERxA4faavr6/lLNLo8yBDrg3oYxtKCNHuoxTF4FDWnNz2dkw4qRI+hz5uKPsAE3Hk6wM2dw+OpOqTA+fa+fl5LHOgEw6ZRttd1B3avEJ8e3u73wC8zoauH0r8F8lqhjJCejWQquhCKh8EOskNBVwoKj+LGyfNNh65j6g7ypJjnz45zJULHXpkSjitx802nkoKtmkfAyRcZfw+0SHYchKW7d7E4uIiSUTd5AQ8SqlvfMpJvQWPUoI4syE7sarqYu4Y7laOo8qrmpsoqORyQ/KE/Su5nIdPIG1iGS9tNYZDZBz8zkbK4EXVsIzjFqt6rjhXIZJ6EkxYznhQdVXD8araTBiGwcPDw7HyxMH9/X0DyncpGMhtU2HqyJ+grCwKOVYT3HeOcIL6FN8Dl5tpV34bN9bL5vlC5+fyoeLgCDd5hG0ZwzI7F3x33ikSHf6lsrG1GRY0sBh41wby7IxHGt+iGjjRRIk0TRtQ5u7T09OZrHAoBr9nQLkRwyLJNg2+3nUEdmYCbgeaG+wwnWVrTq6yxGnsZo0L2bJWopTVrCKRjvIeIe64Zhre7LOvYw4sKx8yLwrRSvHKUZmQS4zseDoa0wegpBY3IJDbR0fMzMyEmhvk/zF9AjJnXeqDgW82DAHMAPgeJ8T7uOkTWKwf5vQ0fHFk606Zz+d3zFdj3Aaxh61Vhq2rw3vROVizQLkjn5yykQbOI+1zV7bFenQw3QSEW2R3Mnhvma9OY6h4tyMxUKyyJTfEEcN8qtontB+0V7aMynLDCNoqyGlH0VPwrAF7XdcnAf1tsQ/9o+LQZs9IcE5us7Ozcac5kRsfT3yhT694tyM5OAZKlEc6RJ47jASbTkUfT9jRfSsHMgx19qSqCmL0vCc+ORprMwCwC2sSHNsxQpR9kjH+tBcBfCMsOgP4lLZZc5M5beH7BWW/YUFKlhv648Wkb27eKyK9FD5076EMXDDySqO8H1HTVysY9urj4yOPjj32PMoVV47x26DXQoY7UAKPqjUjJSpC9W2TTWUaiVWxmytQUoubRBlFHnlnTgM9JXqdDVcRnbsBrlFkeUXcdsMIrjzKNkHug/GjIbFfxXwHIF/CJ3PX0NyA3ybatdl3chO5RhY3XxzZC3LdXoLFQUTqWHptm+6HgTa/9rHDytF+ufGYPCAEVs7WZ5W7shxD+FERDbQ98bX1yZlvd+m6O6deXsh1m6EBxy3mYwN/rjHX4M3EtpPr3kRgaC/ksFN6F+z42vjCHzMhGJoioZSWPeoU/tijPkj4M84Y6p9d8qBQVEUpfklzICf8kffM2EwIhqpIvvAg/GGw3u0xojaodxxXTJshAs7y/ubm5u+lpSUuEJU5p+t5nD1PXxOBH/Y/tv5fhHncqeu84pkJxf/zoF53xB6xfwAAAABJRU5ErkJggg==" />
                </defs>
            </svg>
            <svg width="80" height="48" viewBox="0 0 99 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="99" height="31" transform="translate(0 0.689941)" fill="url(#pattern0_2_777)" />
                <defs>
                    <pattern id="pattern0_2_777" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2_777" transform="scale(0.010101 0.0322581)" />
                    </pattern>
                    <image id="image0_2_777" width="99" height="31" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,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" />
                </defs>
            </svg>

        </div>
    </main>
</template>

<script setup>

</script>

<style scoped></style>