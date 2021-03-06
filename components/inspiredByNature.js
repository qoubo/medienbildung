import React from "react";
import {ArrowDownIcon} from "@heroicons/react/outline";

export default function InspiredByNature() {
    return (
        <div className="relative bg-white pt-16 mb-4 sm:py-24" id="inspired">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start -mt-8">
                <div className="relative sm:py-16 lg:py-0">
                    <div className="relative mx-auto max-w-md px-4 md:mt-24 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20 cursor-pointer" onClick={() => window.open('/network')}>
                        {/* Testimonial card*/}
                        <div className="relative pt-64 mt-8 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img src="/graphExample.png" alt="Graph Example" className="absolute inset-0 h-full w-full object-scale-down"/>
                        </div>
                            <p className="pt-4 pl-4 text-xs text-gray-400 md:mt-0 md:order-1">
                                Klicke auf das Bild, um ein Beispiel eines 3D Graphen zu sehen.
                            </p>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                            Inspiriert von der Natur
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                Die Idee des Algorithmus ist das Verhalten der biologischen Vorbilder zu simulieren.
                            </p>
                            <p className="text-base leading-7">
                                Ameisen bewegen sich scheinbar zufällig, jedoch folgen sie einem einfachen System.
                                Während sie sich bewegen, hinterlassen Ameisen eine Pheromonspur und wählen als nächsten Pfad
                                 den Pfad mit der höchsten Pheromonkonzentration oder einen Zufälligen.
                                Dieses einfache Prinzip reicht aus, um den kürzesten Weg vom Nest zu einer Futterquelle zu finden
                                und diesen an andere Ameisen zu kommunizieren. In der Informatik wird diese Idee genutzt, um
                                in Graphen beliebiger Komplexität den kürzesten Pfad von einem Knoten zu einem anderen zu finden.
                            </p>
                            <p className="text-base leading-7">
                                Du fragst dich vielleicht, wo es in der realen Welt Graphen gibt und wofür man diese benötigt.
                                Nunja, das Internet ist so ein Graph.
                                Wenn du immer noch keine Vorstellungen hast, klick einfach auf das Bild.
                                Dort findest du einen Graphen, der dem Internet ähnelt - natürlich kleiner und stark vereinfacht.

                                Gerade eben, als du diese Website aufgerufen hast, eilte deine Anfrage durch das Internet
                                zu einem Server, der dir diese Webseite zur Verfügung stellt.

                                Niemand möchte beim Aufrufen einer Webseite ewig warten bis der Server antwortet.
                                Deswegen wird deine Anfrage auf dem kürzesten Weg durch das Netzwerk geschickt.
                                Bei genau dieser Aufgabe kann uns der Ameisenalgorithmus helfen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
