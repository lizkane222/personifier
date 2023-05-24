import React from 'react';

// https://tailwindui.com/components/preview
const Form = (props) => {
    const {formName, formDescription, field, address, radioButtonList, checkBoxList} = props
    
    const {addressCountry, countryOptionItems, addressStreet } = address 
    const {radioButtonListName, radioButtonName, radioButtonListDescription, radioButtonLabel} = radioButtonList
    const {checkBoxName, checkBoxField, checkBoxDescription} = checkBoxList
    

    return(
        
    <form>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">{formName}</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">{formDescription}</p>

            {/* STANDARD INPUT FIELD */}
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                <label for={field.label} class="block text-sm font-medium leading-6 text-gray-900">{field.label}</label>
                <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">paw</span> */}
                    <input type="text" name={field.name} id={field.name} autocomplete={field.name} class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="scoobydoo"/>
                    </div>
                </div>
                </div>


                <div class="col-span-full">
                    <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                <div class="mt-2 flex items-center gap-x-3">
                    <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                </div>
            </div>

            
            </div>
            </div>

            <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">User Traits</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Mailing Address</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-4">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                {/* ADDRESS */}
                <div class="sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>{countryOptionItems}</option>
                    </select>
                </div>
                </div>

                <div class="col-span-full">
                <label for={addressStreet} class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                <div class="mt-2">
                    <input type="text" name={addressStreet} id={addressStreet} autocomplete={addressStreet} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-2 sm:col-start-1">
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                    <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-2">
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div class="mt-2">
                    <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>
            </div>
            </div>

            <div class="border-b border-gray-900/10 pb-12">
            {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p> */}

            {/* CHECKBOXES */}
            <div class="mt-10 space-y-10">
                <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">{checkBoxList}</legend>
                <div class="mt-6 space-y-6">
                    <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                            <input id={checkBoxName} name={checkBoxName} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div>
                        <div class="text-sm leading-6">
                            <label for={checkBoxName} class="font-medium text-gray-900">{checkBoxField}</label>
                            <p class="text-gray-500">{checkBoxDescription}</p>
                        </div>
                    </div>
                </div>
                </fieldset>
                
                {/* RADIO BUTTONS */}
                <fieldset>
                    <legend class="text-sm font-semibold leading-6 text-gray-900">{radioButtonListName}</legend>
                    <p class="mt-1 text-sm leading-6 text-gray-600">{radioButtonListDescription}</p>
                    <div class="mt-6 space-y-6">
                        <div class="flex items-center gap-x-3">
                            <input id={radioButtonName} name={radioButtonName} type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <label for={radioButtonName} class="block text-sm font-medium leading-6 text-gray-900">{radioButtonLabel}</label>
                        </div>
                    </div>
                </fieldset>
            </div>
            </div>
        </div>

        {/* CANCEL SAVE */}
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </form>

    )
}

export default Form;

