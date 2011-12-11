// --
// DSV.TicketOverview.js - provides functions for form handling
// Copyright (C) 2010-2011 einraumwerk, http://einraumwerk.de/\n";
// --
// $Id: DSV.TicketOverview.js,v 1.4 2011/05/26 17:57:29 rb Exp $
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var DSV = DSV || {};

/**
 * @namespace
 * @exports TargetNS as DSV.TicketOverview
 * @description
 *      This namespace contains all form functions.
 */
DSV.TicketOverview = (function (TargetNS) {

    /**
     * @function
     * @description
     *      This function fills the form with the info from template
     * @param JsonData - the tickettemplate as jsondata
     * @return nothing
     */
    TargetNS.ColorizeRows = function () {
        $( 'tr.MassIncident > td' ).css( 'background-color', '#81BEF7' );
        $( 'tr.MassIncidentChild > td' ).css( 'background-color', '#BE81F7' );
        $( 'tr.IncompleteTicket > td' ).css( 'background-color', '#F78181' );
    };

    return TargetNS;
}(DSV.TicketOverview || {}));
