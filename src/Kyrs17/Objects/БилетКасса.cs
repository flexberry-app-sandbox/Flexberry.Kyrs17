﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kyrs17
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Билет касса.
    /// </summary>
    // *** Start programmer edit section *** (БилетКасса CustomAttributes)

    // *** End programmer edit section *** (БилетКасса CustomAttributes)
    [AutoAltered()]
    [Caption("Билетная касса")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БилетКассаE", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    [View("БилетКассаL", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    public class БилетКасса : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fАдрес;
        
        // *** Start programmer edit section *** (БилетКасса CustomMembers)

        // *** End programmer edit section *** (БилетКасса CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (БилетКасса.Адрес CustomAttributes)

        // *** End programmer edit section *** (БилетКасса.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (БилетКасса.Адрес Get start)

                // *** End programmer edit section *** (БилетКасса.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (БилетКасса.Адрес Get end)

                // *** End programmer edit section *** (БилетКасса.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БилетКасса.Адрес Set start)

                // *** End programmer edit section *** (БилетКасса.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (БилетКасса.Адрес Set end)

                // *** End programmer edit section *** (БилетКасса.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (БилетКасса.Наименование CustomAttributes)

        // *** End programmer edit section *** (БилетКасса.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (БилетКасса.Наименование Get start)

                // *** End programmer edit section *** (БилетКасса.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (БилетКасса.Наименование Get end)

                // *** End programmer edit section *** (БилетКасса.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БилетКасса.Наименование Set start)

                // *** End programmer edit section *** (БилетКасса.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (БилетКасса.Наименование Set end)

                // *** End programmer edit section *** (БилетКасса.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БилетКассаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БилетКассаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БилетКассаE", typeof(IIS.Kyrs17.БилетКасса));
                }
            }
            
            /// <summary>
            /// "БилетКассаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БилетКассаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БилетКассаL", typeof(IIS.Kyrs17.БилетКасса));
                }
            }
        }
    }
}
