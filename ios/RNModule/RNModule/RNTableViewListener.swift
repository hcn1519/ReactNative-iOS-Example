//
//  RNTableViewListener.swift
//  RNModule
//
//  Created by 홍창남 on 13/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation
import React

protocol RNTableViewListenerDelegate: class {
    func didSelectRNTableViewCell()
}

@objc(RNTableViewListener)
class RNTableViewListener: NSObject {

    weak var delegate: RNTableViewListenerDelegate?

    @objc func didSelectTableViewCell() {
        NotificationCenter.default.post(name: NSNotification.Name(rawValue: "didSelectTableViewCell"),
                                        object: nil, userInfo: nil)
    }
}
