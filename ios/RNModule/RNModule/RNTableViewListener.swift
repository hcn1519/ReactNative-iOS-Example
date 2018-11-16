//
//  RNTableViewListener.swift
//  RNModule
//
//  Created by 홍창남 on 13/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation
import React

@objc(RNTableViewListener)
class RNTableViewListener: NSObject {
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
    @objc func didSelectTableViewCell(_ sectionIndex: NSInteger, rowIndex: NSInteger) {
        
        let indexPath = IndexPath(row: rowIndex, section: sectionIndex)
        NotificationCenter.default.post(name: NSNotification.Name(rawValue: "didSelectTableViewCell"),
                                        object: nil, userInfo: ["indexPath": indexPath])
    }
}
//func getCount(_ name: NSString, withAge age: NSNumber) {...}
