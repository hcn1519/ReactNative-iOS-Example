//
//  RCTRootView+extension.swift
//  RNModule
//
//  Created by 홍창남 on 11/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation

extension RCTRootView {
    convenience init(_ bridgeManager: RNBridgeManager,
                     moduleName: String,
                     initialProperties: [AnyHashable : Any]? = nil) {
        
        self.init(bridge: bridgeManager.bridge, moduleName: moduleName, initialProperties: initialProperties)
    }
}
